
const postService = {

    //crud functions 
    getPosts(db) {
        return db
            .from('posts')
            .select('*')
            .orderBy('date_created', 'desc')
    },
    //get by Id
    getPostsById(db, id) {
        return db
            .from('posts')
            .select('*')
            .where({ id: id })
            .orderBy('date_created', 'desc')
            
    },
    //insert post
    insertPost(db, newPost) {
        return db.insert(newPost)
            .into('posts')
            .returning('*')
            .then(([post]) => post)
            // .then(post => {
            //     postService.getPostsById(db, post.id)
            // })
    },
    //update post
    updatePost(db, id, newPost) {
        return db('posts')
            .where({
                id: id
            })
            .update(newPost, returning = true)
            .returning('*')
    },
    //delete post
    deletePost(db, id) {
        return db('posts')
            .where({
                id: id
            })
            .delete()
    },
    //get for profile page (followed users)
    getFeed(db, user_id) {
        return db
            .from('followers')
            .select('posts.id', 
                'posts.user_id', 
                'posts.title', 
                'posts.pic', 
                'posts.desc_post', 
                'posts.date_created', 
                'followers.follower_user_id',
                'users.username'
                )
            .join('posts', {'posts.user_id': 'followers.follower_user_id'})
            .join('users', {'users.id': 'followers.follower_user_id'})
            .where('followers.followed_user_id', user_id)
            .orderBy('posts.date_created', 'desc')
    },
    //get for profile page ()
    getProfile(db) {
        return db
            .join('posts', {'posts.id':'users.id'})
            .from('users')
            .select(
                '*'
            )
    }


}

module.exports = postService