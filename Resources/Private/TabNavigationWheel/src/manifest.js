import React, {Fragment, PureComponent} from 'react';
import manifest from '@neos-project/neos-ui-extensibility';
import styles from "./styles.css"

manifest('NeosRulez.Neos.TabNavigationWheel', {}, (globalRegistry, {frontendConfiguration}) => {
    const containerRegistry = globalRegistry.get('containers');
    const originalInspector = containerRegistry.get('RightSideBar/Inspector');
    containerRegistry.set('RightSideBar/Inspector', ExtendedInspector(originalInspector));
});

const ExtendedInspector = (OriginalInspector) => {
    return class extendedInspector extends PureComponent {

        render() {
            return (
                <Fragment>
                    <div id="neos-ExtendedInspector" className={styles.extendedInspector} >
                        <OriginalInspector />
                    </div>
                </Fragment>
            );
        }
    }
};
