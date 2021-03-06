module.exports = {
  'User': {
    path: 'users/me',
    methods: ['GET']
  },
  'Users': {
    path: 'users',
    methods: ['POST']
  },
  'Subscriptions': {
    path: 'users/me/subscriptions',
    methods: ['GET']
  },
  'SubscriptionPosts': {
    path: 'users/me/subscriptions/posts',
    methods: ['GET']
  },
  'Sites': {
    path: 'sites',
    methods: ['GET', 'POST']
  },
  'Site': {
    path: 'sites/{0}',
    args: 1,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'Photos': {
    path: 'sites/{0}/photos/public',
    args: 1,
    methods: ['GET']
  },
  'Subscribe': {
    path: 'sites/{0}/subscribe',
    args: 1,
    methods: ['PUT']
  },
  'Unsubscribe': {
    path: 'sites/{0}/unsubscribe',
    args: 1,
    methods: ['PUT']
  },
  'HeaderImage': {
    path: 'sites/{0}/header_image',
    args: 1,
    methods: ['POST', 'DELETE']
  },
  'SiteProfile': {
    path: 'sites/{0}/profile',
    args: 1,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  },
  'SiteProfileImage': {
    path: 'sites/{0}/profile/image',
    args: 1,
    methods: ['PUT', 'DELETE']
  },
  'Tags': {
    path: 'sites/{0}/tags',
    args: 1,
    methods: ['GET']
  },
  'Contributors': {
    path: 'sites/{0}/contributors',
    args: 1,
    methods: ['GET', 'POST']
  },
  'Contributor': {
    path: 'sites/{0}/contributors/{1}',
    args: 2,
    methods: ['DELETE']
  },
  'Subscribers': {
    path: 'sites/{0}/subscribers',
    args: 1,
    methods: ['GET', 'POST']
  },
  'Subscriber': {
    path: 'sites/{0}/subscribers/{1}',
    args: 2,
    methods: ['DELETE']
  },
  'ExternalSites': {
    path: 'sites/{0}/external_sites',
    args: 1,
    methods: ['GET']
  },
  'ExternalSite': {
    path: 'sites/{0}/external_sites/{1}',
    args: 2,
    methods: ['GET', 'DELETE']
  },
  'Theme': {
    path: 'sites/{0}/theme',
    args: 1,
    methods: ['GET', 'POST']
  },
  'AllPosts': {
    path: 'explore/public',
    methods: ['GET']
  },
  'Posts': {
    path: 'sites/{0}/posts',
    args: 1,
    methods: ['GET', 'POST']
  },
  'PublicPosts': {
    path: 'sites/{0}/posts/public',
    args: 1,
    methods: ['GET']
  },
  'Post': {
    path: 'sites/{0}/posts/{1}',
    args: 2,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'PostPhotos': {
    path: 'sites/{0}/posts/{1}/photos',
    args: 2,
    methods: ['GET']
  },
  'PostVideos': {
    path: 'sites/{0}/posts/{1}/videos',
    args: 2,
    methods: ['GET']
  },
  'PostAudioFiles': {
    path: 'sites/{0}/posts/{1}/audio_files',
    args: 2,
    methods: ['GET']
  },
  'Comments': {
    path: 'sites/{0}/posts/{1}/comments',
    args: 2,
    methods: ['GET', 'POST']
  },
  'Comment': {
    path: 'sites/{0}/posts/{1}/comments/{2}',
    args: 3,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'Likes': {
    path: 'sites/{0}/posts/{1}/likes',
    args: 2,
    methods: ['GET', 'POST']
  },
  'Like': {
    path: 'sites/{0}/posts/{1}/likes/{2}',
    args: 3,
    methods: ['GET', 'DELETE']
  },
  'Pages': {
    path: 'sites/{0}/pages',
    args: 1,
    methods: ['GET', 'POST']
  },
  'Page': {
    path: 'sites/{0}/pages/{1}',
    args: 2,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'Categories': {
    path: 'sites/{0}/link_categories',
    args: 1,
    methods: ['GET', 'POST']
  },
  'Category': {
    path: 'sites/{0}/link_categories/{1}',
    args: 2,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'MoveCategory': {
    path: 'sites/{0}/link_categories/{1}/move',
    args: 2,
    methods: ['PUT']
  },
  'Links': {
    path: 'sites/{0}/link_categories/{1}/links',
    args: 2,
    methods: ['GET', 'POST']
  },
  'Link': {
    path: 'sites/{0}/link_categories/{1}/links/{2}',
    args: 3,
    methods: ['GET', 'PUT', 'DELETE']
  },
  'MoveLink': {
    path: 'sites/{0}/link_categories/{1}/links/{2}/move',
    args: 3,
    methods: ['PUT']
  }
};
