export type StateTemplate={
    dynamicNavState:boolean
}
export type ValueTemplateProvider={
    template:StateTemplate,
    toggleDynamicNav?:()=>void,
    toggleTheme?:()=>void
};