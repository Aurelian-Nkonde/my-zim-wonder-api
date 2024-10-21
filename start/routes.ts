/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const WondersController = () => import('#controllers/wonders_controller')
const CommentsController = () => import('#controllers/comments_controller')
const UpvotesController = () => import('#controllers/upvotes_controller')

router.get('/', async () => {
  return {
    message: 'The API is healthy!',
    percentage: '100%',
    status: 200,
  }
})
router
  .group(() => {
    router
      .group(() => {
        router
          .group(() => {
            router.get('/', [WondersController, 'allWonders'])
            router.get('/:id', [WondersController, 'singleWonder'])
            router.post('/', [WondersController, 'createWonder'])
            router.put('/:id', [WondersController, 'updateWonder'])
            router.delete('/:id', [WondersController, 'deleteWonder'])
          })
          .prefix('/wonders')
        router
          .group(() => {
            router.get('/', [CommentsController, 'getAllComments'])
            router.get('/total', [CommentsController, 'AllCommentsCount'])
            router.get('/:id', [CommentsController, 'getComment'])
            router.post('/', [CommentsController, 'createComment'])
            router.delete('/:id', [CommentsController, 'deleteComment'])
            router.put('/:id', [CommentsController, 'updateComment'])
            router.get('/user/comments/:id', [CommentsController, 'AllUserComments'])
            router.get('/wonder/comments/:id', [CommentsController, 'AllWonderComments'])
            router.get('/user/comments/count/:id', [CommentsController, 'AllUserCommentCount'])
            router.get('/wonder/comments/count/:id', [CommentsController, 'AllWonderCommentCount'])
          })
          .prefix('/comments')
        router
          .group(() => {
            router.get('/', [UpvotesController, 'getAllUpvotes'])
            router.get('/:id', [UpvotesController, 'getUpvote'])
            router.post('/', [UpvotesController, 'create'])
            router.put('/:id', [UpvotesController, 'update'])
            router.get('/all/count', [UpvotesController, 'getAllUpvotesCount'])
            router.get('/user/count/:id', [UpvotesController, 'getUserAllUpvotesCount'])
            router.get('/wonder/count/:id', [UpvotesController, 'getWonderUpvoteCount'])
            router.get('/wonder/positive/count/:id', [UpvotesController, 'getWonderPositiveCount'])
            router.get('/wonder/negative/count/:id', [UpvotesController, 'getWonderNegativeCount'])
          })
          .prefix('/upvote')
      })
      .prefix('/v1')
  })
  .prefix('/api')
