import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const SomeDynamic = Loadable({
    loader: () => import(/* webpackChunkName: "SomeDynamic" */ './components/SomeDynamic'),
    loading: () => null,
    webpack: () => [require.resolveWeak('./components/SomeDynamic')],
    modules: ['SomeDynamic'],
});

const BetaDynamic = Loadable({
    loader: () => import(/* webpackChunkName: "BetaDynamic" */ './components/BetaDynamic'),
    loading: () => null,
    webpack: () => [require.resolveWeak('./components/BetaDynamic')],
    modules: ['BetaDynamic'],
});

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/component-render/SomeDynamic"
                    exact
                    render={() => <SomeDynamic />}
                />
                <Route
                    path="/component-render/BetaDynamic"
                    exact
                    render={() => <BetaDynamic />}
                />
            </Switch>
        );
    }
}

export {
    App,
};
