import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network'
import { fetchConfig } from '../utils/fetchUtils';
import { log } from 'redux-modules-middleware';
import { fetchFromStorage } from '../utils/localStorage';

const endpoint = `${getHost()}/volunteers`

const create = (params) => {
  console.log(params);
  const formattedParams = { ...params, number_of_volunteers: Number(params.number_of_volunteers)}
  return fetch(endpoint, { headers: fetchConfig(), method: 'POST', body: JSON.stringify(params) })
    .then(res => res.json())
}

const list = params =>
  fetch(endpoint, { headers: fetchConfig() }).then(res => res.json());

// TODO - 12/16 yash - name this something better
const volunteersModule = createModule ({
  name: 'volunteers',
  initialState: {
    data: [],
    loading: false,
    successMessage: '',
  },
  composes: [liftState],
  selector: s => s.volunteers,
  transformations: {
    create: (state, { payload }) => {
      return loop(
      Object.assign({}, state, { loading: true, successMessage: '' }),
      Cmd.run(create, {
        successActionCreator: volunteersModule.actions.createSuccess,
        failActionCreator: volunteersModule.actions.createError,
        args: [payload]
      })
    )},
    createSuccess: {
      reducer: (state, { payload }) => {
        return Object.assign(
          {},
          state,
          { data: state.data.concat(payload), loading: false, successMessage: 'Save successful!' }
        );
      }
    },
    createError: (state, payload) => console.log(state, payload),
    list: (state, { payload }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(list, {
        successActionCreator: volunteersModule.actions.listSuccess,
        failActionCreator: volunteersModule.actions.listError,
        args: [payload]
      }),
    ],
    listSuccess: {
      middleware: [log()],
      reducer: (state, { payload }) =>
        Object.assign({}, state, { loading: false, data: payload || [] })
    },
    listError: s => s,
    resetBanners: state => Object.assign({}, state, { successMessage: '' })
  },
});

export default volunteersModule;
