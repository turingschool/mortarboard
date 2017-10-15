// @flow
import React, { type Node } from 'react'
import { gql, graphql } from 'react-apollo'
import Post from '../components/Post'
import PostLink from '../components/elements/Link'

type Props = {
  children: Node,
  location: {
    key: any,
  },
  data: {
    allPosts: Array<{
      id: string,
      imageUrl: string,
      description: string,
      email: string,
    }>,
    loading: boolean,
    refetch: Function,
  },
}

class ListPage extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.data.refetch()
    }
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>
            Loading... {process.env.REACT_APP_GRAPHQL_ENDPOINT}
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="w-100 flex flex-wrap" style={{ maxWidth: 1150 }}>
          <PostLink to="/create">
            <div>+ New Post</div>
          </PostLink>
          {this.props.data.allPosts && this.props.data.allPosts.map(post => (
            <Post
              key={post.id}
              post={post}
              refresh={() => this.props.data.refetch()}
            />
          ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}

const FeedQuery = gql`
  query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      description
      id
      imageUrl
      email
    }
  }
`

const ListPageWithData = graphql(FeedQuery, {
  options: {
    fetchPolicy: 'network-only',
  },
})(ListPage)

export default ListPageWithData
