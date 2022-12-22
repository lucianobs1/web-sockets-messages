import { randomUUID as UUID } from "crypto";
import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";

type ChatRoom = Document & {
  idUsers: User[];
  idChatRoom: String;
};

const ChatRoomSchema = new Schema({
  idUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  udChatRoom: {
    type: String,
    default: UUID(),
  },
});

const ChatRoom = mongoose.model<ChatRoom>("ChatRoom", ChatRoomSchema);

export { ChatRoom };
