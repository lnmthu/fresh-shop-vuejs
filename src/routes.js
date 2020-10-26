Home = require('./views/Home/index.vue')
DetailProduct = require('./views/DetailProduct/index.vue')
Shop = require('./views/Shop/index.vue')
PaginateProduct = require('./views/Shop/components/PaginateProduct.vue')
PaginateProductOfCategory = require('./views/Shop/components/PaginateProductOfCategory.vue')
Blog = require('./views/Blog/index.vue')
PaginateBlog = require('./views/Blog/components/PaginateBlog.vue')
PaginateBlogOfCategory = require('./views/Blog/components/PaginateBlogOfCategory.vue')
DetailBlog = require('./views/DetailBlog/index.vue')
Contact = require('./views/Contact/index.vue')
export const routes = [
    { path: "", name: "home", component: Home },

    {
        path: "/shop", name: "shop", component: Shop, children: [
            { path: "", name: "listProduct", component: PaginateProduct },
            { path: "category/:unique_id", name: "listProductOfCategory", component: PaginateProductOfCategory }
        ]
    },

    { path: "/detail-product/:unique_id", name: "detailProduct", component: DetailProduct },

    {
        path: "/blog", name: "blog", component: Blog, children: [
            { path: "", name: "listBlog", component: PaginateBlog },
            { path: "category/:id", name: "listBlogOfCategory", component: PaginateBlogOfCategory }
        ]
    },

    { path: "/detail-blog/:id", name: "detailBlog", component: DetailBlog },

    { path: "/contact", name: "Contact", component: Contact },
]