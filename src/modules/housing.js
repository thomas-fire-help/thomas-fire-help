import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network';
import { log } from 'redux-modules-middleware';
import { fetchConfig } from '../utils/fetchUtils';

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
    length_of_stay: params.duration,
    neighborhood: params.neighborhood,
    housing_type: params.housingType,
    has_animals: params.householdHasAnimals,
    length_of_stay: params.duration,
    notes: params.description,
    child_friendly: params.childFriendly,
    child_notes: params.childNotes,
    pets_accepted: params.petsAllowed,
    pet_notes: params.petNotes,
    contact_name: params.name,
    phone_number: params.phoneNumber,
    email_address: params.emailAddress,
  };
};

const list = params =>
  fetch(endpoint, { headers: fetchConfig() }).then(res => res.json());

const examplePayload = [
  {
    city: 'Ventura',
    beds: 2,
    paid: true,
    neighborhood: 'The Avenue',
    housing_type: 'room',
    has_animals: true,
    length_of_stay: 'short_term',
    child_friendly: true,
    kid_notes: '',
    pets_accepted: true,
    pet_notes: 'No gerbils',
    contact_name: 'Marcus Bernales',
    phone_number: '8052639559',
    email_address: 'mboperator@gmail.com',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus consequat nunc nec efficitur. Phasellus pellentesque a leo id dignissim. Fusce ac neque tortor. Phasellus eu finibus orci. Proin et euismod lorem. Quisque a sem dapibus, tincidunt mauris sit amet, fringilla urna. Etiam vestibulum eu tortor id blandit. Mauris pellentesque enim sed dolor posuere consectetur. Ut accumsan eros et neque gravida, eget rhoncus nunc elementum. Donec lacinia placerat mauris, at malesuada nisi fringilla ac.',
  },
  {
    city: 'Ventura',
    beds: 2,
    paid: true,
    neighborhood: 'Old Town',
    housing_type: 'house',
    has_animals: true,
    length_of_stay: 'short_term',
    child_friendly: true,
    kid_notes: 'No toddlers.',
    pets_accepted: true,
    pet_notes: 'No gerbils',
    contact_name: 'Marcus Bernales',
    phone_number: '8052639559',
    email_address: 'mboperator@gmail.com',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus consequat nunc nec efficitur. Phasellus pellentesque a leo id dignissim. Fusce ac neque tortor. Phasellus eu finibus orci. Proin et euismod lorem. Quisque a sem dapibus, tincidunt mauris sit amet, fringilla urna. Etiam vestibulum eu tortor id blandit. Mauris pellentesque enim sed dolor posuere consectetur. Ut accumsan eros et neque gravida, eget rhoncus nunc elementum. Donec lacinia placerat mauris, at malesuada nisi fringilla ac.',
  },
]

const housingModule = createModule ({
  name: 'housing',
  initialState: {
    data: [],
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

export default housingModule;
