import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
