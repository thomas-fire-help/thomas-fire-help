import { createModule } from 'redux-modules';
import { loop, Cmd, liftState } from 'redux-loop';
import { getHost } from '../utils/network';

const endpoint = `${getHost()}/housings`;

const create = params =>
  fetch(endpoint, { method: 'POST', body: JSON.stringify(params) })
    .then(res => res.json());

const serializeForCreate = params => {
  return {
    beds: params.bedsAvailable,
    paid: params.price,
    neighborhood: params.neighborhood,
    housing_type: params.housingType,
    has_animals: params.householdHasAnimals,
    length_of_stay: params.duration,
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
  fetch(endpoint).then(res => res.json());

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
    notes: '',
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
    create: (state, { payload }) => [
      Object.assign({}, state, { loading: true }),
      Cmd.run(create, {
        successActionCreator: housingModule.createSuccess,
        failActionCreator: housingModule.createError,
        args: [serializeForCreate(payload)]
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
      reducer: (state, { payload }) =>
        Object.assign({}, state, { loading: false, data: examplePayload })
    },
    listError: s => s,
  },
});

export default housingModule;
