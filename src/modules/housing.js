import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network';
import { log } from 'redux-modules-middleware';
import { fetchConfig } from '../utils/fetchUtils';
import qs from 'query-string';

const endpoint = `${getHost()}/housings`;

const create = (params, onSuccess) =>
  fetch(endpoint, { method: 'POST', body: JSON.stringify(params), headers: fetchConfig() })
    .then(res => res.json())
    .then(data => {
      onSuccess(data)
      return data
    })

const serializeForCreate = params => {
  return {
    beds: params.bedsAvailable,
    paid: params.price,
    city: params.city,
    neighborhood: params.neighborhood,
    housing_type: params.housingType,
    has_animals: params.householdHasAnimals,
    length_of_stay: params.duration,
    notes: params.description,
    child_friendly: params.childFriendly,
    kid_notes: params.childNotes,
    pets_accepted: params.petsAllowed,
    pet_notes: params.petNotes,
    contact_name: params.name,
    phone_number: params.phoneNumber,
    email_address: params.emailAddress,
  };
};
/*
  params = {
    filter: {
      pets_accepted: true
    },
    page: 1
  }

*/
const formatParams = ({ filters = {}, page = 0, perPage = 25 }) => {
  const formattedFilters = Object
    .keys(filters)
    .reduce((string, key) => {
      const value = filters[key]
      return `${string}&filters[${key}]=${value}`
    }, '')

  const querystring = `?page=${page}&per_page=${perPage}${formattedFilters}`
  return querystring
}


const list = params => {
  return fetch(`${endpoint}${formatParams(params)}`, { headers: fetchConfig() })
  .then(res => res.json());
}

const housingModule = createModule ({
  name: 'housing',
  initialState: {
    data: [],
    filters: {},
    page: 0,
    perPage: 25,
    loading: false,
  },
  composes: [liftState],
  selector: s => s.housing,
  transformations: {
    init: state => state,
    create: (state, { payload, meta }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(create, {
        successActionCreator: housingModule.actions.createSuccess,
        failActionCreator: housingModule.actions.createError,
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
        successActionCreator: housingModule.actions.listSuccess,
        failActionCreator: housingModule.actions.listError,
        args: [{
          filters: state.filters,
          perPage: state.perPage,
          page: state.page
        }]
      }),
    ],
    listSuccess: {
      middleware: [log()],
      reducer: (state, { payload }) =>
        Object.assign({}, state, { loading: false, data: payload })
    },
    listError: s => s,

    updatePage: (state, { payload }) => [
      Object.assign({}, state, { page: payload }),
      Cmd.action(housingModule.actions.list())
    ],

    updatePerPage: (state, { payload }) => [
      Object.assign({}, state, { perPage: payload }),
      Cmd.action(housingModule.actions.list())
    ],

    updateFilters: {
      middleware: [log()],
      reducer: (state, { payload: { key, value } }) => [
        Object.assign({}, state, {
          filters: Object.assign({}, state.filters, { [key]: value })
        }),
        Cmd.action(housingModule.actions.list())
      ]
    }
  },
});

export default housingModule;
