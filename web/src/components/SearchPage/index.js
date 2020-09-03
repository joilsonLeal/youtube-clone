import React from 'react';

import VideoRow from '../VideoRow';
import ChannelRow from '../ChannelRow';

import TuneOutLineIcon from '@material-ui/icons/TuneOutlined';

import './styles.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutLineIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="659K"
                noOfVideos={382}
                description="You can find awesome programming lessons here. Also, expect programming tips and tricks that will take your coding skills to the next level"
            />
            <hr />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />
            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />
            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />
            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />
            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a YouYube Clone with REACT JS"
                image="https://i.ytimg.com/vi/GePLvNgWROg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAjwvR4sTpsiqednKI2jP7Eg9KO9g"
            />
        </div>
    )
}

export default SearchPage;