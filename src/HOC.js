import React, { Component } from "react";
import { withTranslation } from "react-i18next";


class HighOrderComponent extends Component {
    render() {
        const { t } = this.props;

        return (
            <h1>{t('welcome.title')}</h1>
        )
    }
}
export default withTranslation('common')(HighOrderComponent)

