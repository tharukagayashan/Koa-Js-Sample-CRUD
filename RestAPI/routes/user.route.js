const Router = require('@koa/router');
const {createUser,getAllUsers,getUniqueUser,updateUser,deleteUser} = require('../api/user.api');

const router = new Router(
    {
        prefix:'/user'
    }
);

router.post('/insert',async (ctx)=>{
    let user = ctx.request.body;
    
    await createUser(user)
    .then(()=>{
        ctx.body = "Inserted Successfully";
    })
    .catch((err)=>{
        ctx.body = err;
    })
})

router.get('/',async (ctx)=>{
    await getAllUsers()
    .then((data)=>{
        ctx.body = data;
    })
    .catch((err)=>{
        ctx.body = err;
    })
})

router.get('/:id',async (ctx)=>{

    const id = ctx.params.id;
    await getUniqueUser(id)
    .then((data)=>{
        ctx.body = data;
    })
    .catch((err)=>{
        ctx.body = err;
    })

})

router.put('/update/:id',async (ctx)=>{

    const id = ctx.params.id;
    let user = ctx.request.body;

    await updateUser(id,user)
    .then(()=>{
        ctx.body = "Updated Successfully";
    })
    .catch((err)=>{
        ctx.body = err;
    })

})

router.delete('/delete/:id',async (ctx)=>{

    const id = ctx.params.id;

    await deleteUser(id)
    .then(()=>{
        ctx.body = "User Deleted Successfully";
    })
    .catch((err)=>{
        ctx.body = err;
    })
})

module.exports = router;