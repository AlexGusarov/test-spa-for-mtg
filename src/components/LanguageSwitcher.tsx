import React from 'react';
import { connect } from 'react-redux';
import { setLanguage,  RootState } from '../store/store';
import './LanguageSwitcher.css';

interface DispatchProps {
    setLanguage: (language: 'ru' | 'en') => void;
  }

interface StateProps {
  language: string;
}

type Props = DispatchProps & StateProps;

class LanguageSwitcher extends React.Component<Props> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    if (newLanguage === 'ru' || newLanguage === 'en') {
      this.props.setLanguage(newLanguage as 'ru' | 'en');
    }
  };
  
  render() {
    return (
      <div className="language-switcher">
        <select className="select-language" value={this.props.language} onChange={this.handleLanguageChange}>
          <option className="option-language" value="en">Eng</option>
          <option className="option-language" value="ru">Ru</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  language: state.language,
});

const mapDispatchToProps: DispatchProps = {
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
