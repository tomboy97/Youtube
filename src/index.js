import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//no need to mention path in case of packages, imply only on files
const API_KEY = 'AIzaSyBrLr0UbX_uQr_Cn1H11ZyxKUH2-AZIiDY';
//create a new component that should produce some html
//below is a class
//to render we must use an instance and not a class
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch ({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
      });
      //this.setState({ videos: data });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return(
      <div>
       <SearchBar onSearchTermChange={term => this.videoSearch(term) }  />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList
          onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
          videos= {this.state.videos} />
      </div>
    );
  }
}

//take this component's generated html and put it on the page
//(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
