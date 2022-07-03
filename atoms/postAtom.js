import { atom } from 'recoil'

export const handlePostState = atom({
  key: 'handlePOstState',
  default: false,
})

export const getPostState = atom({
  key: 'getPostState',
  default: {},
})

export const useSRRPostsState = atom({
  key: 'useSRRPostsState',
  default: true,
})
