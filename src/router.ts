import * as React from "react";

const createComponent = (Comp: string) => {
    const TempComponent = React.lazy(() => import(`./pages/${Comp}/${Comp}.tsx`));
    return function(props: any) {
        // 目前加载很快，这里需要研究如何强制控制加载显示时间，不需要显示什么东西
        return React.createElement(
            React.Suspense,
            {
                fallback: React.createElement("div", null)
            },
            React.createElement(TempComponent, props)
        );
    };
}

export default [
    {
        title: "title here",
        path: '/',
        component: createComponent("Index"),
    }
];