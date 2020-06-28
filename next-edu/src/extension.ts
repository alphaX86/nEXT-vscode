// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "next-edu" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	var disposable = vscode.commands.registerCommand('next-edu.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello there adventurer! Seems so excited to explore ML huh?! Very well! I am here to help you! If you need any help on topic just type on the command palette to know more! ;)');
	});

	var disposable = vscode.commands.registerCommand('next-edu.ai', () => {
		vscode.window.showInformationMessage('In CS, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals. Colloquially, the term "artificial intelligence" is often used to describe machines (or computers) that mimic "cognitive" functions that humans associate with the human mind, such as "learning" and "problem solving".');
	});

	var disposable = vscode.commands.registerCommand('next-edu.ml', () => {
		vscode.window.showInformationMessage('Machine learning (ML) is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.dl', () => {
		vscode.window.showInformationMessage('Deep learning (also known as deep structured learning) is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.supl', () => {
		vscode.window.showInformationMessage('Supervised learning is the machine learning task of learning a function that maps an input to an output based on example input-output pairs.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.unsupl', () => {
		vscode.window.showInformationMessage('Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. The most common unsupervised learning method is cluster analysis, which is used for exploratory data analysis to find hidden patterns or grouping in data.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.reinl', () => {
		vscode.window.showInformationMessage('Reinforcement learning (RL) is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize the notion of cumulative reward.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.neural', () => {
		vscode.window.showInformationMessage('A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. In this sense, neural networks refer to systems of neurons, either organic or artificial in nature.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.turing', () => {
		vscode.window.showInformationMessage('A Turing Test is a method of inquiry in artificial intelligence (AI) for determining whether or not a computer is capable of thinking like a human being. The test is named after Alan Turing, the founder of the Turning Test and an English computer scientist, cryptanalyst, mathematician and theoretical biologist.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.cv', () => {
		vscode.window.showInformationMessage('Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they “see.”');
	});

	var disposable = vscode.commands.registerCommand('next-edu.reg', () => {
		vscode.window.showInformationMessage('Regression takes a group of random variables, thought to be predicting Y, and tries to find a mathematical relationship between them. This relationship is typically in the form of a straight line (linear regression) that best approximates all the individual data points.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.classify', () => {
		vscode.window.showInformationMessage('Classification is a process related to categorization, the process in which ideas and objects are recognized, differentiated and understood.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.cluster', () => {
		vscode.window.showInformationMessage('Clustering is the task of dividing the population or data points into a number of groups such that data points in the same groups are more similar to other data points in the same group and dissimilar to the data points in other groups.');
	});

	var disposable = vscode.commands.registerCommand('next-edu.decision', () => {
		vscode.window.showInformationMessage('A decision tree is a flowchart-like structure in which each internal node represents a “test” on an attribute (e.g. whether a coin flip comes up heads or tails), each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).');
	});

	var disposable = vscode.commands.registerCommand('next-edu.random', () => {
		vscode.window.showInformationMessage('Random forests or random decision forests are an ensemble learning method for classification, regression and other tasks that operate by constructing a multitude of decision trees at training time and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.');
	});	

	var disposable = vscode.commands.registerCommand('next-edu.help', () => {
		vscode.window.showInformationMessage('Remember you must learn yourself to avoid mistakes! So try to learn from docs for better application! xD');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
