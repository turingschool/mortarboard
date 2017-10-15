// @flow
import React from 'react'
import { gql, graphql } from 'react-apollo'
import PostLink from './elements/Link'

type Props = {
  mutate: Function,
  history: {
    replace: Function,
  },
  post: {
    id: string,
    description: string,
    imageUrl: string,
  },
}

class Post extends React.Component<Props> {
  // not currently used.
  handleDelete = async () => {
    await this.props.mutate({ variables: { id: this.props.post.id } })
    this.props.history.replace('/')
  }

  render() {
    return (
      <PostLink
        className="bg-white ma3 box post flex flex-column no-underline br2"
        to={`/post/${this.props.post.id}`}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: 320,
            height: 320,
          }}
        />
        <div className="flex items-center black-80 fw3 description">
          {this.props.post.description}
        </div>
      </PostLink>
    )
  }
  // <span className='red f6 pointer dim' onClick={this.handleDelete}>Delete</span>
}

const deleteMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostWithMutation = graphql(deleteMutation)(Post)

export default PostWithMutation
