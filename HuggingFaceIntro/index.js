/** @format */

import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(process.env.HF_TOKEN);

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

// Text translation
const textToTranslate = "It's an exciting time to be an AI engineer";

// https://huggingface.co/facebook/mbart-large-50-many-to-many-mmt#languages-covered

const textTranslationResponse = await hf.translation({
	model: 'facebook/mbart-large-50-many-to-many-mmt',
	inputs: textToTranslate,
	parameters: {
		src_lang: 'en_XX',
		tgt_lang: 'ru_RU',
	},
});

const translation = textTranslationResponse.translation_text;
console.log('\ntranslation:\n');
console.log(translation);
