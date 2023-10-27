import mongoose from 'mongoose';

const blogsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a name of your blog'],
    },
    writer: {
        type: String,
        required: [true, 'Please enter your name']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of your blog'],
    },
    blog: {
        type: String,
        required: [true, 'Please enter your blog']
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
})
const blog = mongoose.model.Blogs || mongoose.model('Blogs', blogsSchema);
export default blog;