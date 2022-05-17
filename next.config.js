module.exports={
    async redirects(){
        return [
            {
                source:"/userAccount",
                permanent:false,
                destination:"/login"
            },
            {
                source:"/userAccount/licitaciones",
                permanent:false,
                destination:"/login"
            },
            {
                source:"/userAccount/licitaciones/crearLicitacion",
                permanent:false,
                destination:"/login"
            }
        ]
    },
    env:{
        API_REST:process.env.API_REST
    }
}