import { Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import './News.scss'


const News = () => {
    const onSelect = ( tabName ) => {
        console.log( 'Selecting tab', tabName );
    };
           
    
  return ( 
    <div className='News'>
      <Tabs>
            <TabList className="news-tabList" >
           
                <Tab className="news-tab1"><p className='news-tab'>お知らせ</p></Tab>
                <Tab className="news-tab1"><p className='news-tab'>お知らせ</p></Tab>
                <Tab className="news-tab1"><p className='news-tab'>お知らせ</p></Tab>
            </TabList>
            <TabPanel  className="my-tab-panel"
            onSelect={ onSelect }>
                <div className='news-tabs'>
                <p className='news-flex-date'>date</p>
                <a className='news-flex-text' href=''>text text text text text text text text text text text text
                text text text text text text text text text text text texttext text text text text text text text text text text text </a>
                </div> 
                <div className='news-tabs'>
                <p className='news-flex-date'>date</p>
                <a className='news-flex-text'>text text text text text text text text text text text text</a>
                </div>  
                <div className='news-tabs'>
                <p className='news-flex-date'>date</p>
                <a className='news-flex-text'>text text text text text text text text text text text text</a>
                </div>
                <div className='news-tabs'>
                <p className='news-flex-date'>date</p>
                <a className='news-flex-text'>text text text text text text text text text text text text</a>
                </div>
                <div className='news-tabs'>
                <p className='news-flex-date'>date</p>
                <a className='news-flex-text'>text text text text text text text text text text text text</a>
                </div>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>

            
        </Tabs>
    </div>
   
  )
}

export default News
