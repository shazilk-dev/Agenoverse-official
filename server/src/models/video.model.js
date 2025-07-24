import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url for the video file
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary url for the thumbnail
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      index: true, // for better searching
    },
    description: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number, // duration in seconds
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
