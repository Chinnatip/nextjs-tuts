import { atom } from 'recoil';
import { Toy } from './interface'

export const userState = atom<string>({
    key: 'userState',
    default: 'Chin',
  });

export const cartState = atom<Toy[]>({
  key: 'cartState',
  default: [],
});

export const genreState = atom<string>({
    key: 'genreState',
    default: 'extream'
})

export const sortState = atom<string>({
    key: 'sortState',
    default: 'ascending'
})

export const facilityState = atom({
  key: 'facilityState',
  default: [
    'toilet', 'restaurant', 'carpark'
  ]
})

export const selectedFacilityState = atom<string>({
  key: 'selectedFacilityState',
  default: 'toilet'
})