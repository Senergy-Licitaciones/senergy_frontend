module.exports = {
  /* async redirects(){
        return [
            {
                source:"/userAccount",
                permanent:false,
                has:[
                    {
                        type:"cookie",
                        key:"__next_preview_data",
                        value:"hola"
                    }
                ],
                destination:"/login"
            },
            {
                source:"/userAccount/licitaciones",
                permanent:false,
                has:[
                    {
                        type:"cookie",
                        key:"__next_preview_data",
                        value:""
                    }
                ],
                destination:"/login"
            },
            {
                source:"/userAccount/licitaciones/crearLicitacion",
                has:[
                    {
                        type:"cookie",
                        key:"__next_preview_data",
                        value:undefined
                    }
                ],
                permanent:false,
                destination:"/login"
            }
        ]
    }, */
  env: {
    API_REST: process.env.API_REST,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
  images: {
    domains: ['cdn.pixabay.com', 'res.cloudinary.com', 'media.istockphoto.com']
  }
}
