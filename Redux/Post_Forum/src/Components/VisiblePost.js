import { connect } from 'react-redux';
import {markAsRead} from '../Actions/index';
import { visibilityFilters } from '../Actions/index';
import AllPosts from './AllPosts';

const getVisiblePosts = (posts, filter) => {
    switch (filter) {
      case visibilityFilters.SHOW_ALL:
        return posts
      case visibilityFilters.NOT_READ:
        return posts.filter(t => !t.hasBeenRead)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}
const mapStateToProps = state => ({
    posts: getVisiblePosts(state.postReducer, state.readReducer),
})

const mapDispatchToProps = dispatch => ({
    toggle: id => dispatch(markAsRead(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AllPosts)