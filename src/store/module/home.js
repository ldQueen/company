const state = {
  num: 1,
  imgList: [
    { value: '1', label: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
    { value: '2', label: 'http://www.51pptmoban.com/d/file/2014/02/15/a6b9831203430dcc2fee3351c30cc72b.jpg' },
    { value: '3', label: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg' },
    { value: '4', label: 'http://attach.bbs.miui.com/forum/201312/06/211346rdqzode7loq7oo5o.jpg' },
    { value: '5', label: 'https://ps.ssl.qhmsg.com/sdr/400__/t01ad947215fca99c97.jpg' },
    { value: '6', label: 'http://img.pptjia.com/image/20180117/767f4b74a8d7b453b149430ee364c9ce.jpg' },
  ],
  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
}
const mutations = {
  GET_IMG_LIST_STATE(state){
    if(state.num <= state.imgList.length){
      state.url = state.imgList[state.num-1].label
    }else{
      state.url = state.imgList[0].label
    }      
  },
  IMG_NUM (state){
    if(state.num < state.imgList.length){
      state.num++
    }else{
      state.num=1
    }
    
  }
}
const actions = {
  changeImg({ commit }){
    commit('GET_IMG_LIST_STATE')
  },
  changeNum({ commit }){
    commit('IMG_NUM')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}