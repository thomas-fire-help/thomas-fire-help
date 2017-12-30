import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network';
import { log } from 'redux-modules-middleware';
import { fetchConfig } from '../utils/fetchUtils';

const endpoint = `${getHost()}/services`;

const create = (params, onSuccess) =>
  fetch(endpoint, { method: 'POST', body: JSON.stringify(params), headers: fetchConfig() })
    .then(res => res.json())
    .then(data => {
      onSuccess(data)
      return data
    })

const serializeForCreate = params => {
  return {
    // TO DO: Update with services API
  };
};

const list = params =>
  fetch(endpoint, { headers: fetchConfig() }).then(res => res.json());

  // TO DO: services examples
  const examplePayload = [
  {},
  {}
]

const servicesModule = createModule ({
  name: 'services',
  initialState: {
    data: [],
    loading: false,
  },
  composes: [liftState],
  selector: s => s.services,
  transformations: {
    init: state => state,
    create: (state, { payload, meta }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(create, {
        successActionCreator: servicesModule.actions.createSuccess,
        failActionCreator: servicesModule.actions.createError,
        args: [serializeForCreate(payload), meta.onSuccess]
      }),
    ],
    createSuccess: {
      reducer: (state, { payload }) =>
        Object.assign({}, state, { data: state.data.concat(payload), loading: false }),
    },
    createError: s => s,
    list: (state, { payload }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(list, {
        successActionCreator: servicesModule.actions.listSuccess,
        failActionCreator: servicesModule.actions.listError,
        args: [payload]
      }),
    ],
    listSuccess: {
      middleware: [log()],
      reducer: (state, { payload }) =>
        Object.assign({}, state, { loading: false, data: payload })
    },
    listError: s => s,
  },
});

export default servicesModule;
