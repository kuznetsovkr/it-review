import {$authHost, $host} from "./index";

export const fetchSection = async () => {
    const {data} = await $host.get('api/section')
    return data
}
export const fetchAcademy = async (id) => {
    const {data} = await $host.get('api/academy/page/' + id +'?page=0&size=2')
    return data
}
export const fetchAllAcademy = async () => {
    const {data} = await $authHost.get('api/academy/admin')
    return data
}

export const fetchAllCategory = async () => {
    const {data} = await $host.get('api/category/admin')
    return data
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}
export const fetchAllClass = async () => {
    const {data} = await $authHost.get('api/class/admin')
    return data
}
export const fetchReview = async (id) => {
    const {data} = await $host.get('api/class/reviews/' + id)
    return data
}
export const fetchCategoryAdmin = async (id) => {
    const {data} = await $authHost.get('api/category/admin' + id)
    return data
}
export const fetchReviewActive = async () => {
    const {data} = await $authHost.get('http://192.168.99.100:8080/api/review/admin/active')
    return data
}
export const fetchReviewProactive = async () => {
    const {data} = await $authHost.get('api/review/admin/proactive' )
    return data
}

export const fetchUpdateReview = async ({item}) => {
     await $authHost.put('api/review/admin/proactive' + '/' + item.id)
}

export const createReview = async () => {
    const {data} = await $authHost.post('api/academy')
    return data
}



