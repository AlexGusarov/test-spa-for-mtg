import React from 'react';

interface LanguageSwitcherProps {
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
}

interface State {
  language: string;
}

class LanguageSwitcher extends React.Component<LanguageSwitcherProps, State> {
  constructor(props: LanguageSwitcherProps) {
    super(props);
    this.state = { language: props.defaultLanguage || 'ru' };
  }

  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    this.setState({ language: newLanguage });
    // Вызываем onLanguageChange prop, если он был предоставлен
    if (this.props.onLanguageChange) {
      this.props.onLanguageChange(newLanguage);
    }
  };

  render() {
    return (
      <div className="language-switcher">
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    );
  }
}

export default LanguageSwitcher;
