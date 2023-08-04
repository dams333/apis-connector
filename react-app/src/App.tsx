import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from './shadcn-components/ui/card';
import { ScrollArea } from './shadcn-components/ui/scroll-area';

function App() {
	return (
		<div className="bg-gray-900 w-full h-full p-5">
			<ScrollArea className="w-full h-full rounded-lg border bg-transparent text-card-foreground shadow-sm p-5">
				<Card className="w-fit h-fit bg-transparent text-white">
					<CardHeader>
						<CardTitle>Input test</CardTitle>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
			</ScrollArea>
		</div>
	);
}

export default App;
