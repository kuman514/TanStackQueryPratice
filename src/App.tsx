import { useState } from 'react';

import ListItem from '^/shared/list-item';
import TextInput from '^/shared/text-input';

function App() {
  const [userName, setUserName] = useState<string>('');

  /**
   * @todo
   * Prevent columns breaking the layout of chilren elements
   */

  return (
    <main className="w-screen h-dvh flex flex-col justify-center items-center gap-12">
      <TextInput textValue={userName} onChange={setUserName} />
      <ul className="columns-3 h-full gap-4">
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
        <ListItem
          mainTitle="Paranoia 7th Anniversary"
          description="파라노이아 7주년 애기코이시 둥기둥기"
          thumbnailUrl="https://pbs.twimg.com/profile_banners/2580505316/1587998528"
          thumbnailAlt="코메이지 코이시"
        />
      </ul>
    </main>
  );
}

export default App;
