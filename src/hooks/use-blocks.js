import { selectBlocks } from '@slices/layouts';
import { useSelector } from 'react-redux';

function Blocks() {
  const blocks = useSelector(selectBlocks);
  return blocks;
}

export default Blocks;
