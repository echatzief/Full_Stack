let nextID=0;
export const addPost = (title,text)=>({
    type:'ADD_POST',
    title:title,
    message:text,
    id:nextID++,
})
export const deletePost = (id)=>({
    type:'DELETE_POST',
    id:id,
})
export const setVisibility =(filter)=>({
    type:'SET_VISIBILITY',
    filter:filter,
})
export const markAsRead = (id)=>({
    type:'MARK_AS_READ',
    id:id,
})
export const visibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    NOT_READ:'NOT_READ',
}
