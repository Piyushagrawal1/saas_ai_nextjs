import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
    amount: { type: Number, required: true },
    stripeId: {type: String, required: true, unique: true},
    plan: { type: String},
    credits: {type: Number},
    buyer: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now },
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);
export default Transaction;
