import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network'

// TODO - 12/16 yash - replace this with the actual endpoint
const endpoint = `${getHost()}/volunteers`

const create = params =>
  fetch(endpoint, { method: 'POST', body: JSON.stringify(params) })
    .then(res => res.json())

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
    init: state => state,
    create: (state, { payload }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(create, {
        successActionCreator: volunteersModule.createSuccess,
        failActionCreator: volunteersModule.createError,
        args: [payload]
      }),
    ],
    createSuccess: {
      reducer: (state, { payload }) =>
        Object.assign({}, state, { data: state.data.concat(payload), loading: false }),
    },
    createError: s => s,
  },
});

export default volunteersModule;
