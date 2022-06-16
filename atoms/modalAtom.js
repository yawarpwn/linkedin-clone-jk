import { atom } from 'recoil'

const modalState =  atom({
  key:'modalState',
  default: false
})

const modalTypeState = atom({
  key: 'modalTypeState',
  default: 'dropIn'
})

export { modalState, modalTypeState }
