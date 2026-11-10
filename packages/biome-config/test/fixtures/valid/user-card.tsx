import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type UserCardProps = {
  isActive: boolean;
  userId: string;
};

export function UserCard({ isActive, userId }: UserCardProps) {
  const { t } = useTranslation();
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then((user: { name: string }) => {
        if (!cancelled) {
          setName(user.name);
        }
      })
      .catch(() => {
        setName(null);
      });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return (
    <section className={'flex items-center gap-2'}>
      <h2 className={'text-lg font-semibold'}>{name ?? t('user.unknown')}</h2>
      <input aria-label={t('user.active')} checked={isActive} readOnly={true} type={'checkbox'} />
      <span>{'—'}</span>
    </section>
  );
}
