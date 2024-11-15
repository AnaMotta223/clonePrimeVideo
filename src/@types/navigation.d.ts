export type PropsStack = {
    Login: undefined;
    Home: undefined;
}

declare global {
    namespace ReactNavigation{
        interface RootParamList extends PropsStack {}
    }
}