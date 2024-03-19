import React from 'react';
import { connect } from 'react-redux';
import reviewsData from '../data/data.json';
import { RootState } from '../store/store';
import './ReviewsList.css';

interface Review {
    name: string;
    review: string;
    date: string;
  }
  
  interface State {
    reviews: Review[];
    currentPage: number;
    reviewsPerPage: number;
  }
  
  interface StateProps {
    language: 'ru' | 'en'; 
  }

class ReviewsList extends React.Component<StateProps, State> {
    constructor(props: StateProps) {
        super(props);
        this.state = {
          reviews: [],
          currentPage: 1,
          reviewsPerPage: 10
        };
      }

  componentDidMount() {
    this.loadReviews('ru'); 
  }

  componentDidUpdate(prevProps: StateProps) {
    if (this.props.language !== prevProps.language) {
      this.loadReviews(this.props.language);
    }
  }

  loadReviews = (language: 'ru' | 'en') => {
    const reviewsArray: Review[] = Object.values(reviewsData[language]) as Review[];
    this.setState({ reviews: reviewsArray });
  };

  handlePageChange = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  formatName = (fullName: string) => {
    const names = fullName.split(' ');
    if (names.length > 1) {
      return `${names[0]} ${names[1][0]}.`;
    }
    return fullName;
  };

  
  renderPagination = () => {
    const { reviews, currentPage, reviewsPerPage } = this.state;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);


    return (
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button key={page} onClick={() => this.handlePageChange(page)} disabled={currentPage === page}>
            {page}
          </button>
        ))}
      </div>
    );
  };

  renderReviews = () => {
    const { reviews, currentPage, reviewsPerPage } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    return currentReviews.map((review, index) => (
        <div key={index} className="review-card">
        <div className="review-name">{this.formatName(review.name)}</div>
        <div className="review-text">{review.review}</div>
        <div className="review-date">{review.date}</div>
      </div>
    ));
  };

  render() {
    return (
        <div>
      <div className='reviews-container'>
        {this.renderReviews()}
    </div>
        {this.renderPagination()}
        </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
    language: state.language,
  });

  export default connect(mapStateToProps)(ReviewsList);
