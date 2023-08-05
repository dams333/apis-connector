import { StepForward } from 'lucide-react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from './shadcn-components/ui/card';
import { ScrollArea } from './shadcn-components/ui/scroll-area';
import Draggable from 'react-draggable';
import { Separator } from './shadcn-components/ui/separator';

function App() {
	return (
		<div className="bg-gray-900 w-full h-full p-5">
			<ScrollArea className="w-full h-full rounded-lg border bg-transparent text-card-foreground shadow-sm">
				<Draggable handle="strong">
					<Card className="w-fit h-fit bg-transparent text-white">
						<strong>
							<CardHeader className="cursor-move">
								<CardTitle>Input test</CardTitle>
							</CardHeader>
							<Separator />
						</strong>
						<CardContent>
							<StepForward
								strokeWidth={3}
								className="cursor-pointer"
							/>
						</CardContent>
					</Card>
				</Draggable>
			</ScrollArea>
		</div>
	);
}

export default App;
