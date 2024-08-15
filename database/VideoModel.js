const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    channelId: {
        type: String,
        required: true,
    },
    channelName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    lengthText: {
        type: String,
    },
    publishedTimeText: {
        type: String,
    },
    thumbnails: [{
        height: Number,
        url: String,
        width: Number,
    }],
    title: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
        unique: true,
    },
    viewCountText: {
        type: String,
    },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
