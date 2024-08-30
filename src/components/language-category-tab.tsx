import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import RepoItem from './repo-item'

type Props = {
	categories: Category[]
}
export default function LanguageCategoryTab({categories}:Props) {
  return (
    <div className="flex h-screen w-full justify-center px-4">
      <div className="w-full max-w-6xl">
        <TabGroup>
          <TabList className="flex gap-4 justify-start flex-wrap items-center">
            {categories.map(({lang}) => (
              <Tab
                key={lang}
                className="rounded-lg py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/40 data-[focus]:outline-1 data-[focus]:outline-white bg-gray-500"
              >
                {lang}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3 mx-auto">
            {categories.map(({lang,repos}:{lang:string,repos:Repo[]}) => (
              <TabPanel key={lang} className="rounded-xl">
                <ul className='list-none grid grid-flow-row grid-cols-3 gap-2'>
                  {repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo}/>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
