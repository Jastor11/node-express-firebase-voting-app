function addRestaurant(){
    var database = firebase.database()
    var restaurantRef = database.ref('/restaurants')
    
    var restaurantInput = document.getElementById('addRestaurant')
    
    var restaurantName = restaurantInput.value
    restaurantInput.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Log in to add a poll.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        name: restaurantName,
        votes: 0
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
}

function upvote(key){
    console.log(key)
    var database = firebase.database()
    var user = firebase.auth().currentUser
    var userId = user.uid
    var displayName = user.displayName
    
    // var restaurantVotesRef = database.ref('/restaurants/' + key +'/votes' + userId)
    var restaurantVotesRef = database.ref('/restaurants')
                                     .child(key)
                                     .child('/votes')
                                     .child(userId)
    restaurantVotesRef.set(displayName)
                      .then(function(){
                          window.location.reload()
                      })
                      .catch(function(err){
                          console.log(err)
                      })
}

function downvote(key){
    console.log(key)
    var database = firebase.database()
    var user = firebase.auth().currentUser
    var userId = user.uid
    var displayName = user.displayName
    
    // var restaurantVotesRef = database.ref('/restaurants/' + key +'/votes' + userId)
    var restaurantVotesRef = database.ref('/restaurants')
                                     .child(key)
                                     .child('/votes')
                                     .child(userId)
                                     .remove()
                                     .then(function(){
                                         window.location.reload()
                                     })
                                     .catch(function(err){
                                         console.log(err)
                                     })
    // restaurantVotesRef.remove(userId) 
}