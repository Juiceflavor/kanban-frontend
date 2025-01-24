'use client';

import { useState, useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { fetchData, transition } from '@/app/utils/apiConfig';

interface Board {
  id: number;
  title: string;
  description: string;
  statusCode: '000' | '001' | '002' | '003';
}

const states = [
  { name: 'INACTIVE', value: '000' },
  { name: 'TO_DO', value: '001' },
  { name: 'IN_PROGRESS', value: '002' },
  { name: 'DONE', value: '003' },
];

const MyBoards = () => {
  const [boardList, setBoardList] = useState<Board[]>([]);
  const columnsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const initialColumnState = useRef<string | null>(null);

  const fetchBoards = async () => {
    try {
      const response = await fetchData('boards');
      setBoardList(response.data || []);
    } catch (error) {
      console.error('Error loading boards:', error); //Handle error messages
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  useEffect(() => {
    if (boardList.length === 0) {
      return;
    }

    columnsRefs.current.forEach((column, index) => {
      if (column) {
        Sortable.create(column, {
          group: 'shared',
          animation: 150,
          onStart: (event) => {
            const itemId = event.item?.dataset?.id;
            const board = boardList.find((board) => board.id === Number(itemId));

            if (board) {
              initialColumnState.current = board.statusCode;
            }
          },
          onEnd: async (event) => {
            const itemId = event.item?.dataset?.id;
            const destinationColumn = event.to;
            const columnIndex = columnsRefs.current.findIndex((column) => column === destinationColumn);

            if (columnIndex !== -1) {
              const newStatus = states[columnIndex]?.value;
              try {
                if (newStatus !== initialColumnState.current) {
                  if (newStatus === '000') {
                    transition('boards', itemId!, 'inactive');
                  } else if (initialColumnState.current === '000' && newStatus === '001') {
                    transition('boards', itemId!, 'active');
                  } else {
                    transition('boards', itemId!, 'transition');
                  }

                  fetchBoards();
                }
                else {
                  console.log('The board did not change column.'); //Handle error messages
                }
              } catch (error) {
                console.log('Error updating board status:', error); //Handle error messages
              }
            }

            initialColumnState.current = null;
          }
        });
      }
    });
  }, [boardList]);

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap space-y-4 md:space-y-0 md:space-x-4 p-4">
      {states.map((state, index) => (
        <div
          key={state.value}
          className="flex-1 md:w-1/2 lg:w-1/4 h-[790px] bg-gray-900 dark:bg-gray-100 p-4 rounded overflow-hidden"
        >
          <h2 className="text-xl font-bold mb-4 text-white dark:text-black sticky top-0 bg-gray-900 dark:bg-gray-100 p-4 rounded">
            {state.name.replace('_', ' ')}
          </h2>
          <div className="space-y-4 overflow-y-auto h-[calc(100%-64px)]"
            ref={(el) => {
              columnsRefs.current[index] = el;
            }}
          >
            {boardList
              .filter((board) => board.statusCode === state.value)
              .map((board) => (
                <div
                  key={board.id}
                  data-id={board.id}
                  className="p-4 bg-gray-800 dark:bg-white rounded shadow text-white dark:text-black"
                >
                  {board.title}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBoards;
