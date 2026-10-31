import { questionRepository } from '../src/services/questionRepository';

const all = questionRepository.getAll();
const authentic = all.filter(q => q.provenanceType === 'authentic_pyq');
const practice = all.filter(q => q.provenanceType === 'authored_practice');

console.log(`Total questions in repository: ${all.length}`);
console.log(`Authentic PYQs: ${authentic.length}`);
console.log(`Authored Practice: ${practice.length}`);

const byYear: Record<string, number> = {};
for (const q of authentic) {
  const y = q.examYear || 'Unknown';
  byYear[y] = (byYear[y] || 0) + 1;
}
console.log('Authentic PYQs by Year:', byYear);

const bySubject: Record<string, number> = {};
for (const q of all) {
  bySubject[q.subject] = (bySubject[q.subject] || 0) + 1;
}
console.log('Questions by Subject:', bySubject);

