import { useState } from 'react';

import TextInput from '^/shared/text-input';

function App() {
  const [userName, setUserName] = useState<string>('');

  return <TextInput textValue={userName} onChange={setUserName} />;
}

export default App;
