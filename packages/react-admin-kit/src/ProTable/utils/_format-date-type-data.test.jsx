import dayjs from 'dayjs';
import { _formatDateTypeData } from './index';

describe('formatDateTypeData', () => {
  describe('falsy values', () => {
    it('should return empty string for null', () => {
      expect(_formatDateTypeData(null, 'YYYY-MM-DD')).toBe('');
    });

    it('should return empty string for undefined', () => {
      expect(_formatDateTypeData(undefined, 'YYYY-MM-DD')).toBe('');
    });

    it('should return empty string for empty string', () => {
      expect(_formatDateTypeData('', 'YYYY-MM-DD')).toBe('');
    });

    it('should return empty string for 0', () => {
      expect(_formatDateTypeData(0, 'YYYY-MM-DD')).toBe('');
    });

    it('should return empty string for false', () => {
      expect(_formatDateTypeData(false, 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('string values', () => {
    it('should return the same string when text is already a string', () => {
      const dateString = '2023-12-25';
      expect(_formatDateTypeData(dateString, 'YYYY-MM-DD')).toBe(dateString);
    });

    it('should return formatted date string as-is', () => {
      const formattedDate = '25/12/2023';
      expect(_formatDateTypeData(formattedDate, 'DD/MM/YYYY')).toBe(
        formattedDate,
      );
    });

    it('should return any string value as-is regardless of format', () => {
      const randomString = 'not a date';
      expect(_formatDateTypeData(randomString, 'YYYY-MM-DD')).toBe(
        randomString,
      );
    });
  });

  describe('date objects and timestamps', () => {
    const testDate = new Date('2023-12-25T10:30:00+08:00');

    it('should format Date object with YYYY-MM-DD format', () => {
      const result = _formatDateTypeData(testDate, 'YYYY-MM-DD');
      expect(result).toBe('2023-12-25');
    });

    it('should format Date object with DD/MM/YYYY format', () => {
      const result = _formatDateTypeData(testDate, 'DD/MM/YYYY');
      expect(result).toBe('25/12/2023');
    });

    it('should format Date object with full datetime format', () => {
      const result = _formatDateTypeData(testDate, 'YYYY-MM-DD HH:mm:ss');
      expect(result).toBe('2023-12-25 10:30:00');
    });

    it('should format timestamp number', () => {
      const timestamp = testDate.getTime();
      const result = _formatDateTypeData(timestamp, 'YYYY-MM-DD');
      expect(result).toBe('2023-12-25');
    });

    it('should format dayjs object', () => {
      const dayjsDate = dayjs('2023-12-25');
      const result = _formatDateTypeData(dayjsDate, 'YYYY-MM-DD');
      expect(result).toBe('2023-12-25');
    });
  });

  describe('different format patterns', () => {
    const testDate = new Date('2023-12-25T15:30:45+08:00');

    it('should handle YYYY format', () => {
      expect(_formatDateTypeData(testDate, 'YYYY')).toBe('2023');
    });

    it('should handle MM format', () => {
      expect(_formatDateTypeData(testDate, 'MM')).toBe('12');
    });

    it('should handle DD format', () => {
      expect(_formatDateTypeData(testDate, 'DD')).toBe('25');
    });

    it('should handle HH:mm:ss format', () => {
      expect(_formatDateTypeData(testDate, 'HH:mm:ss')).toBe('15:30:45');
    });

    it('should handle custom format with text', () => {
      expect(_formatDateTypeData(testDate, 'YYYY年MM月DD日')).toBe(
        '2023年12月25日',
      );
    });
  });

  describe('edge cases', () => {
    it('should handle invalid date objects', () => {
      const invalidDate = new Date('invalid');
      const result = _formatDateTypeData(invalidDate, 'YYYY-MM-DD');
      expect(result).toBe('Invalid Date');
    });

    it('should handle very old dates', () => {
      const oldDate = new Date('1900-01-01');
      const result = _formatDateTypeData(oldDate, 'YYYY-MM-DD');
      expect(result).toBe('1900-01-01');
    });

    it('should handle future dates', () => {
      const futureDate = new Date('2099-12-31');
      const result = _formatDateTypeData(futureDate, 'YYYY-MM-DD');
      expect(result).toBe('2099-12-31');
    });

    it('should handle empty format string', () => {
      const testDate = new Date('2023-12-25');
      const result = _formatDateTypeData(testDate, '');
      expect(result).toBe('2023-12-25');
    });
  });
});
