import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network'
import { fetchConfig } from '../utils/fetchUtils';
import { log } from 'redux-modules-middleware';
import { fetchFromStorage } from '../utils/localStorage';

const endpoint = `${getHost()}/volunteers`

const getAccessToken = () => fetchFromStorage('auth');

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
  },
  composes: [liftState],
  selector: s => s.volunteers,
  transformations: {
    init: state => loop(
      state,
      Cmd.run(getAccessToken, {
        successActionCreator: volunteersModule.actions.initSuccess,
        failActionCreator: volunteersModule.actions.initError,
        args: [],
      })
    ),
    initSuccess: (state, { payload }) => {
      return Object.assign({}, state);
    },
    initError: (state) => state,
    create: (state, { payload }) => {
      return loop(
      Object.assign({}, state, { loading: true }),
      Cmd.run(create, {
        successActionCreator: volunteersModule.actions.createSuccess,
        failActionCreator: volunteersModule.actions.createError,
        args: [payload]
      })
    )},
    createSuccess: {
      reducer: (state, { payload }) => {
        console.log(state, payload)
        return Object.assign({}, state, { data: state.data.concat(payload), loading: false });
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
  },
});

export default volunteersModule;
